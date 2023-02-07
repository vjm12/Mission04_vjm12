using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class GradeCalcModel
    {
        //Make a method for each input and add the validation so the user cannot input more than 100 or less than 0
        [Required]
        [Range(0,100)]
        public byte Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public byte GroupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Final { get; set; }
        [Required]
        [Range(0, 100)]
        public byte INTEX { get; set; }

    }
}
