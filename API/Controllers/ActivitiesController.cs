
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet] // /api/activites
        public async Task<ActionResult<List<Activity>>> GetActivites() => await _context.Activities.ToListAsync();

        [HttpGet("{id}")] // /api/activites/2
        public async Task<ActionResult<Activity>> GetActivity(Guid id) => await _context.Activities.FindAsync(id);
    }
}