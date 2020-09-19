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
    public class OonController : ControllerBase
    {
        private readonly HistoryContext _context;

        public OonController(HistoryContext context)
        {
            _context = context;
        }

        // GET: api/Oon
        [HttpGet]
        public async Task<ActionResult<IEnumerable<McpdOutOfNetwork>>> GetMcpdOutOfNetwork()
        {
            return await _context.McpdOutOfNetwork.OrderByDescending(x => x.McpdOutOfNetworkId).Take(20).ToListAsync();
        }

        // GET: api/Oon/5
        [HttpGet("{id}")]
        public async Task<ActionResult<McpdOutOfNetwork>> GetMcpdOutOfNetwork(long id)
        {
            var mcpdOutOfNetwork = await _context.McpdOutOfNetwork.FindAsync(id);

            if (mcpdOutOfNetwork == null)
            {
                return NotFound();
            }

            return mcpdOutOfNetwork;
        }

        // PUT: api/Oon/5
        [HttpPut()]
        public async Task<IActionResult> PutMcpdOutOfNetwork(McpdOutOfNetwork mcpdOutOfNetwork)
        {

            _context.Entry(mcpdOutOfNetwork).State = EntityState.Modified;

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

        // POST: api/Oon
        [HttpPost]
        public async Task<IActionResult> PostMcpdOutOfNetwork(McpdOutOfNetwork mcpdOutOfNetwork)
        {
            _context.McpdOutOfNetwork.Add(mcpdOutOfNetwork);
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

        // DELETE: api/Oon/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<McpdOutOfNetwork>> DeleteMcpdOutOfNetwork(long id)
        {
            var mcpdOutOfNetwork = await _context.McpdOutOfNetwork.FindAsync(id);
            if (mcpdOutOfNetwork == null)
            {
                return NotFound();
            }

            _context.McpdOutOfNetwork.Remove(mcpdOutOfNetwork);
            await _context.SaveChangesAsync();

            return mcpdOutOfNetwork;
        }

        private bool McpdOutOfNetworkExists(long id)
        {
            return _context.McpdOutOfNetwork.Any(e => e.McpdOutOfNetworkId == id);
        }
    }
}
