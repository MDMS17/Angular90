using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular90.Data;
using Angular90.Model;

namespace Angular90.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PcpaController : ControllerBase
    {
        private readonly HistoryContext _context;

        public PcpaController(HistoryContext context)
        {
            _context = context;
        }

        // GET: api/Pcpa
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PcpAssignment>>> GetPcpAssignments()
        {
            return await _context.PcpAssignments.OrderByDescending(x => x.PcpAssignmentId).Take(20).ToListAsync();
        }

        // GET: api/Pcpa/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PcpAssignment>> GetPcpAssignment(long id)
        {
            var pcpAssignment = await _context.PcpAssignments.FindAsync(id);

            if (pcpAssignment == null)
            {
                return NotFound();
            }

            return pcpAssignment;
        }

        // PUT: api/Pcpa/5
        [HttpPut()]
        public async Task<IActionResult> PutPcpAssignment(PcpAssignment pcpAssignment)
        {

            _context.Entry(pcpAssignment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
        }

        // POST: api/Pcpa
        [HttpPost]
        public async Task<IActionResult> PostPcpAssignment(PcpAssignment pcpAssignment)
        {
            _context.PcpAssignments.Add(pcpAssignment);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return NoContent();
        }

        // DELETE: api/Pcpa/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PcpAssignment>> DeletePcpAssignment(long id)
        {
            var pcpAssignment = await _context.PcpAssignments.FindAsync(id);
            if (pcpAssignment == null)
            {
                return NotFound();
            }

            _context.PcpAssignments.Remove(pcpAssignment);
            await _context.SaveChangesAsync();

            return pcpAssignment;
        }

        private bool PcpAssignmentExists(long id)
        {
            return _context.PcpAssignments.Any(e => e.PcpAssignmentId == id);
        }
    }
}
