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
    public class CocController : ControllerBase
    {
        private readonly HistoryContext _context;

        public CocController(HistoryContext context)
        {
            _context = context;
        }

        // GET: api/Coc
        [HttpGet]
        public async Task<ActionResult<IEnumerable<McpdContinuityOfCare>>> GetMcpdContinuityOfCare()
        {
            return await _context.McpdContinuityOfCare.OrderByDescending(x => x.McpdContinuityOfCareId).Take(20).ToListAsync();
        }

        // GET: api/Coc/5
        [HttpGet("{id}")]
        public async Task<ActionResult<McpdContinuityOfCare>> GetMcpdContinuityOfCare(long id)
        {
            var mcpdContinuityOfCare = await _context.McpdContinuityOfCare.FindAsync(id);

            if (mcpdContinuityOfCare == null)
            {
                return NotFound();
            }

            return mcpdContinuityOfCare;
        }

        // PUT: api/Coc/5
        [HttpPut()]
        public async Task<IActionResult> PutMcpdContinuityOfCare(McpdContinuityOfCare mcpdContinuityOfCare)
        {

            _context.Entry(mcpdContinuityOfCare).State = EntityState.Modified;

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

        // POST: api/Coc
        [HttpPost]
        public async Task<IActionResult> PostMcpdContinuityOfCare(McpdContinuityOfCare mcpdContinuityOfCare)
        {
            _context.McpdContinuityOfCare.Add(mcpdContinuityOfCare);
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

        // DELETE: api/Coc/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<McpdContinuityOfCare>> DeleteMcpdContinuityOfCare(long id)
        {
            var mcpdContinuityOfCare = await _context.McpdContinuityOfCare.FindAsync(id);
            if (mcpdContinuityOfCare == null)
            {
                return NotFound();
            }

            _context.McpdContinuityOfCare.Remove(mcpdContinuityOfCare);
            await _context.SaveChangesAsync();

            return mcpdContinuityOfCare;
        }

        private bool McpdContinuityOfCareExists(long id)
        {
            return _context.McpdContinuityOfCare.Any(e => e.McpdContinuityOfCareId == id);
        }
    }
}
