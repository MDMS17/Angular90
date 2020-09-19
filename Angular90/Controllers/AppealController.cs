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
    public class AppealController : ControllerBase
    {
        private readonly HistoryContext _context;

        public AppealController(HistoryContext context)
        {
            _context = context;
        }

        // GET: api/Appeal
        [HttpGet]
        public async Task<ActionResult<IEnumerable<McpdAppeal>>> GetAppeals()
        {
            return await _context.Appeals.OrderByDescending(x => x.McpdAppealId).Take(20).ToListAsync();
        }

        // GET: api/Appeal/5
        [HttpGet("{id}")]
        public async Task<ActionResult<McpdAppeal>> GetMcpdAppeal(long id)
        {
            var mcpdAppeal = await _context.Appeals.FindAsync(id);

            if (mcpdAppeal == null)
            {
                return NotFound();
            }

            return mcpdAppeal;
        }

        // PUT: api/Appeal
        [HttpPut]
        public async Task<IActionResult> PutMcpdAppeal(McpdAppeal mcpdAppeal)
        {

            _context.Entry(mcpdAppeal).State = EntityState.Modified;

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

        // POST: api/Appeal
        [HttpPost]
        public async Task<IActionResult> PostMcpdAppeal(McpdAppeal mcpdAppeal)
        {
            _context.Appeals.Add(mcpdAppeal);
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

        // DELETE: api/Appeal/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<McpdAppeal>> DeleteMcpdAppeal(long id)
        {
            var mcpdAppeal = await _context.Appeals.FindAsync(id);
            if (mcpdAppeal == null)
            {
                return NotFound();
            }

            _context.Appeals.Remove(mcpdAppeal);
            await _context.SaveChangesAsync();

            return mcpdAppeal;
        }

        private bool McpdAppealExists(long id)
        {
            return _context.Appeals.Any(e => e.McpdAppealId == id);
        }
    }
}
