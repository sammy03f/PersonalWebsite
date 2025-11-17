<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Samuel Fisher – Resume"
  description="Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">University of California, Berkeley</h3>
      <div class="text-neutral-500 mb-0.5">2025 — 2027</div>
    </div>
    <p class="byline">B.A. in Applied Mathematics</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Santa Monica College</h3>
      <div class="text-neutral-500 mb-0.5">2024 — 2025</div>
    </div>
    <p class="byline">A.S. in Computer Science and Mathematics</p>
  </div>

  <p>Cumulative GPA: 3.8</p>

  <h4 class="font-medium mt-4 mb-1">Coursework:</h4>
  <ul>
    <li>EECS 126 (Probability and Random Processes)</li>
    <li>Math 156 (Numerical Analysis for Data Science and Statistics)</li>
    <li>Math 113 (Abstract Algebra)</li>
    <li>Math 110 (Abstract Linear Algebra)</li>
    <li>Math 55 (Discrete Mathematics)</li>
    <li>Math 54 (Linear Algebra & Differential Equations)</li>
    <li>Math 53 (Multivariable Calculus)</li>
    <li>CS 61B (Data Structures)</li>
    <li>CS 61A (Structure of Computer Programs)</li>
    <li>Physics 5B (Electromagnetism, Waves, and Optics)</li>
    <li>Physics 5A (Mechanics and Relativity)</li>
  </ul>

<h4 class="font-medium mt-4 mb-1">Extracurriculars:</h4>
  <ul>
    <li>
      <a class="link" href="https://www.180dcberkeley.com/"
        >180 Degrees Consulting (UC Berkeley)</a>
    </li>
        <p class="byline">Consultant, providing strategic solutions for nonprofits and social enterprises</p>
    <li>
      <a class="link" href="https://www.instagram.com/connect.club.smc/"
        >Connect Club (Santa Monica College)</a>
        </li>
        <p class="byline">Founder & President, created a space for community college students to network and enhance their professional profiles</p>
    <li>
      Competitive Coding Club (Santa Monica College)
        </li>
        <p class="byline">Founder & President, led the club in algorithmic problem-solving and competitive programming contests</p>
  </ul>

</section>

<section class="layout-md py-12">
  <h2 class="heading2">Professional Experience</h2>
 <!---->
  <Workplace
    title="Teaching Assistant (Calculus I, II, & III)"
    company="Santa Monica College"
    url="https://www.smc.edu/student-support/academic-support/supplemental-instruction/"
    dates="August 2024 – May 2025"
    location="Santa Monica, CA"
  >
    <li>
     As a Teaching Assistant for three levels of Calculus, 
     I worked directly with three different professors to support over a hundred students each semester 
     in mastering one of the most challenging sequences in mathematics. I wasn’t just grading or answering 
     questions, I was building a bridge between complex material and student understanding.
    </li>
    <li>
      I led weekly problem solving sessions where I broke down difficult concepts like multivariable derivatives, 
      integration techniques, and series convergence into clear components. During office hours and study workshops, 
      I tailored explanations to each student’s learning style, helping them move from confusion to confidence. Many students told me 
      my sessions were the first time the material “clicked.”
    <li>
      I also created fulllength mock exams modeled after the professor’s style, giving students a realistic way to test their 
      knowledge under exam-like conditions. These weren’t just recycled homework problems, they were carefully designed to highlight 
      common pitfalls and integrate multiple concepts into single problems.
      After each mock exam, I held review sessions where we walked through the solutions together, focusing on why certain approaches worked and where students often tripped up. 
      This gave them both the technical practice and the exam day confidence to perform at their best.
    </li>
    <li>
      Here are some of the exams I made: 
      <a class="link" href="/assets/pdf/Practice Exam 5 KONYA MATH 7.pdf" target="_blank" rel="noopener noreferrer"> Calculus 1 </a>
      <a class="link" href="/assets/pdf/Practice Exam 2 Soleymani MATH 8 v0.1.pdf" target="_blank" rel="noopener noreferrer"> Calculus 2 </a>

    </li>
  </Workplace>

  <Workplace
    title="Information Technology Intern"
    company="Jonathan Club"
    url="https://www.jc.org/"
    dates="May 2024 – June 2024"
    location="Santa Monica, CA"
  >
    <li>
      Supported the IT department in maintaining and upgrading the club's
      network infrastructure, ensuring seamless connectivity for members and staff.
    </li>
    <li>
      Assisted in troubleshooting hardware and software issues, providing
      technical support to end-users, and documenting solutions for future reference.
    </li>
    <li>
      Conducted system audits to identify potential vulnerabilities and
      recommended improvements to enhance security and efficiency.
    </li>
    <li>
      Collaborated with the team to implement new software solutions, including
      training staff on their usage and benefits.
    </li>
  </Workplace>

<!--
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Awards and Honors</h2>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Computer Science:</h3>
    <ul>
      <li>
        <b>International Olympiad in Informatics (IOI):</b> Gold Medalist (2018,
        2019), 7<sup>th</sup> place globally
      </li>
      <li>
        <b>Google Hash Code:</b> World Finalist (2020, 2021, 2022), 6<sup
          >th</sup
        > place team out of over 100,000 students and professionals
      </li>
      <li>
        <b>Google Code Jam:</b> Round 3 Finalist (2020), placed 34<sup>th</sup>
        globally
      </li>
      <li><b>Facebook Hacker Cup:</b> Round 3 Finalist (2020)</li>
      <li><b>PicoCTF:</b> Winner (2018), ranked 6th</li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Mathematics:</h3>
    <ul>
      <li>
        <b>Mathematical Olympiad Program (MOP):</b> Participant (2017), IMO team
        selection group (2017, 2018)
      </li>
      <li>
        <b>USA Math Olympiad (USAMO):</b> Honorable Mention (2017), top 24 in nation
      </li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Physics:</h3>
    <ul>
      <li><b>U.S. Physics Team:</b> Invitee (2017, 2018, 2019)</li>
      <li>
        <b>USA Physics Olympiad (USAPhO):</b> Gold Medalist (2017, 2018, 2019)
      </li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Music Performance:</h3>
    <ul>
      <li>
        <b>National YoungArts Foundation:</b> Winner in Classical Music (2018, 2019)
      </li>
      <li>
        <b>JDR Viola Competition:</b> Grand prize winner, performed with a professional
        orchestra (2019)
      </li>
      <li>
        <b>Texas All-State Symphony Orchestra:</b> Principal Violist (2017), Co-Principal
        (2016, 2018)
      </li>
    </ul>
  </div>-->
</section>


<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
