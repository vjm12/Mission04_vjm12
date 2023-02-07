using Microsoft.AspNetCore.Mvc;
using Mission4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Controllers
{
    public class View1Controller : Controller
    {//Make sure that all views and controllers are returning the right things
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
