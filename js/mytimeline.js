var data = {
   "timeline": {
      "headline":"Professional Experience",
      "type":"default",
      "text":"<p>A timeline of my professional experience</p>",
      "date" : [ {
           "startDate": "1996,9,9",
           "endDate": "2000,6,10",
           "headline": "Drexel University",
           "text": "<p>Graduated Summa Cum Laude with a B.S. in Computer Science</p><p>Member of the Golden Key National Honors Society</p><p>Held two full-time co-op positions as a software developer at <a href='http://www.acainc.com'>Allan Collaut Associcates</a> (ACA)</p>"
      },
      {
          "startDate": "2000,8,10",
           "endDate": "2008,5,23",
           "headline": "Lockheed Martin",
           "text": "<h4>Staff Software Engineer for Lockheed Martin</h4><p>Graduated from the Lockheed Martin Technical Leadership Program</p><p>Developed desktop and web based software in C++, Java, and Perl. Held positions of increasing responsibility including software lead on various projects.</p>"
       },
       {
           "startDate": "2008,5,24",
           "endDate": "2011,12,31",
           "headline": "Algorithmics",
           "text": "<h4>Senior Software Engineer for Algorithmcs</h4><p>Senior developer on an eXtreme Programming (XP) development team. Team practices included Test-driven development (TDD), pair programming, and Continuous Integration. Continued on the team after Algorithmics was acquired by <a href='http://www.ibm.com'>IBM</a></p>"
        },
        {
           "startDate": "2012,1,1",
           "endDate": "2014,1,19",
           "headline": "IBM",
           "text": "<h4>Senior Software Engineer for IBM</h4><p>IBM acquires Algorithimcs. Continued on the Algorithmics development team after the acquisition.</p>"
        },
        {
           "startDate": "2014,2,1",
           "headline": "eMoney Advisor",
           "text": "<h4>Software Engineer for eMoney Advisor</h4>"
        }
     ]
   }
};

createStoryJS({
   type: 'timeline',
   width: '100%',
   height: '450',
   source: data,
   embed_id: 'my-timeline'
});
