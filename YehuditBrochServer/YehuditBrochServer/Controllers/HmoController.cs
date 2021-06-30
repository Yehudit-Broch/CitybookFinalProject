using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace YehuditBrochServer.Controllers
{
    [RoutePrefix("api/HMO")]
    public class HmoController : ApiController
    {
        public List<HMODto> Get()
        {
            return BL.HMOLogic.GetAll();
        }
    }
}
