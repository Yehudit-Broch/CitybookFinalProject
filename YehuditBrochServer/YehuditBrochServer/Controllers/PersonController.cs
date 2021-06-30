using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace YehuditBrochServer.Controllers
{
    [RoutePrefix("api/Person")]
    public class PersonController : ApiController
    {
        // POST: api/Person
        public bool Post([FromBody]PersonDto value)
        {
           return BL.PersonLogic.AddPerson(value);
        }
    }
}
