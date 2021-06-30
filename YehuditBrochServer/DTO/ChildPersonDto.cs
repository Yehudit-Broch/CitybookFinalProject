using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ChildPersonDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BornDate { get; set; }
        public string Tz { get; set; }
        public int PersonId { get; set; }
        public virtual PersonDto Person { get; set; }
        public int HMOId { get; set; }
        public virtual HMODto HMO { get; set; }
    }
}
