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
    public class GrievanceController : ControllerBase
    {
        private readonly HistoryContext _context;

        public GrievanceController(HistoryContext context)
        {
            _context = context;
        }

        // GET: api/Grievance
        [HttpGet]
        public async Task<ActionResult<IEnumerable<McpdGrievance>>> GetGrievances()
        {
            return await _context.Grievances.OrderByDescending(x => x.McpdGrievanceId).Take(20).ToListAsync();
        }

        // GET: api/Grievance/5
        [HttpGet("{id}")]
        public async Task<ActionResult<McpdGrievance>> GetMcpdGrievance(long id)
        {
            var mcpdGrievance = await _context.Grievances.FindAsync(id);

            if (mcpdGrievance == null)
            {
                return NotFound();
            }

            return mcpdGrievance;
        }

        // PUT: api/Grievance/5
        [HttpPut()]
        public async Task<IActionResult> PutMcpdGrievance(McpdGrievance mcpdGrievance)
        {
            _context.Entry(mcpdGrievance).State = EntityState.Modified;

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

        // POST: api/Grievance
        [HttpPost()]
        public async Task<IActionResult> PostMcpdGrievance(McpdGrievance mcpdGrievance)
        {
            _context.Grievances.Add(mcpdGrievance);
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

        // DELETE: api/Grievance/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<McpdGrievance>> DeleteMcpdGrievance(long id)
        {
            var mcpdGrievance = await _context.Grievances.FindAsync(id);
            if (mcpdGrievance == null)
            {
                return NotFound();
            }

            _context.Grievances.Remove(mcpdGrievance);
            await _context.SaveChangesAsync();

            return mcpdGrievance;
        }

        private bool McpdGrievanceExists(long id)
        {
            return _context.Grievances.Any(e => e.McpdGrievanceId == id);
        }
    }
}
