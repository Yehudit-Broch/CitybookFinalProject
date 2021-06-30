﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class PersonDto
    {
        public int Id { get; set; }
        public string Tz { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BornDate { get; set; }
        public int Gender { get; set; }
        public int HMOId { get; set; }
        public virtual HMODto HMO { get; set; }
        public virtual List<ChildPersonDto> Children { get; set; }

    }
}
