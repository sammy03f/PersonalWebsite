<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "sshx",
      href: "/projects#sshx",
      desc: "secure web-based, collaborative terminal",
    },
    {
      name: "Bore",
      href: "/projects#bore",
      desc: "bypass your NAT in just 400 lines of code",
      aside: "9500+ stars on GitHub",
    },
    {
      name: "Percival",
      href: "/projects#percival",
      desc: "reactive notebooks for exploratory data analysis",
    },
    {
      name: "Rustpad",
      href: "/projects#rustpad",
      desc: "self-hosted collaborative text editor",
      aside: "6M+ downloads",
    },
    {
      name: "Crepe",
      href: "/projects#crepe",
      desc: "compiled Datalog language in Rust",
      aside: "used by distributed databases & security systems",
    },
    {
      name: "FastSeg",
      href: "/projects#fastseg",
      desc: "real-time semantic segmentation for self-driving cars",
    },
    {
      name: "Set with Friends",
      href: "/projects#setwithfriends",
      desc: "online multiplayer card game",
      aside: "30M+ page views, 900K+ users",
    },
  ];
</script>

<Seo
  title="Samuel Fisher"
  description="Applied Mathematics Student @ UC Berkeley"
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  Applied Mathematics <span class="g"></span><span class="g"> @ </span>UC Berkeley<span class="g">
  <span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I'm a junior undergraduate student at <a class="link" href="https://www.berkeley.edu/">UC Berkeley</a>, where I study Applied Mathematics
      with a concentration in Data Science.
    </p>

    <p>
      I'm passionate about where <em>AI</em>, <em> Math</em>, and <em>Entrepreneurship</em> meet,
      turning bold ideas into real solutions that make life better.
    </p>

    <p>
      I thrive on merging theory and practice, whether it's using math to unlock new insights, 
      AI to scale possibilities, or entrepreneurship to bring ideas into the real world.
    </p>
    <p>Other interests: Soccer (Real Madrid), Running, Reading (Sci-Fi), Cooking, Chess.
  </div>
<!--
  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable open-source work:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>


  <div class="space-y-5">
    <p>
      Previously, I worked at <a class="link" href="https://prosper.org"
        >Prosper Robotics</a
      >, <a class="link" href="https://convex.dev">Convex</a>,
      <a class="link" href="https://jumptrading.com">Jump Trading</a>,
      <a class="link" href="https://scale.com">Scale AI</a>, and
      <a class="link" href="https://nvidia.com">Nvidia</a>. I’ve also
      independently published things in the past, like a
      <a
        class="link"
        href="https://pubs.aip.org/books/monograph/129/F-ma-Contests2011-2019-Solutions-Manual"
        >physics book</a
      >,
      <a
        class="link"
        href="https://www.combinatorics.org/ojs/index.php/eljc/article/view/v28i1p24/pdf"
        >combinatorics research</a
      >, and
      <a class="link" href="https://github.com/ekzhang/graphics-workshop"
        >graphics tutorials</a
      >
      used by thousands. Before that, I won two gold medals at the
      <a class="link" href="https://stats.ioinformatics.org/people/6717"
        >International Olympiad in Informatics</a
      >.
    </p>

    <p>
      I recently graduated from Harvard, where I was a teaching fellow for
      upper-level CS classes, wrote my <a
        class="link"
        rel="external"
        href="/assets/pdf/Senior_Thesis.pdf">thesis on Datalog</a
      >, and studied art, music, and sociology. I am a classical violist and
      enjoy making music with others (<a
        class="link"
        href="https://www.youtube.com/live/_T4IVv0becE">1</a
      >,
      <a
        class="link"
        href="https://www.thecrimson.com/article/2023/4/18/Natasha-pierre-great-comet-1812-musical-preview/"
        >2</a
      >, <a class="link" href="https://youtu.be/4ysgUA-rKUw">3</a>,
      <a class="link" href="https://youtu.be/rYrVFTzP4sw">4</a>,
      <a class="link" href="https://www.harvardbachsoc.org/">5</a>,
      <a
        class="link"
        href="https://news.harvard.edu/gazette/story/2019/11/west-side-story-explores-racial-ethnic-political-complications/"
        >6</a
      >,
      <a class="link" href="https://youtu.be/OcucfY2Kzqo">7</a>,
      <a class="link" href="https://youngarts.org/">8</a>).
    </p>
    <p>Other interests: math, physics, reading, photography, and biking.</p>
  </div>
-->
  <div class="space-y-5">
    <!-- <p>This is what I look like:</p> -->
    <img
      alt="Samuel Fisher Headshot"
      src="/assets/images/profile5.jpg"
    />
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
