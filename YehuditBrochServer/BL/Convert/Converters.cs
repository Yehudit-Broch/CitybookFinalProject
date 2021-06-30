using AutoMapper;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Convert
{
    public static class Converters
    {
        static Converters()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Person,PersonDto>().ReverseMap();
                cfg.CreateMap<HMO, HMODto>().ReverseMap();
                cfg.CreateMap<ChildPerson, ChildPersonDto>().ReverseMap();

            });
        }

        public static Person Convert(PersonDto dto)
        {
            return Mapper.Map<Person>(dto);
        }
        public static List<HMODto> Convert(List<HMO> entity)
        {
            return Mapper.Map<List<HMODto>>(entity);
        }
    }
}
