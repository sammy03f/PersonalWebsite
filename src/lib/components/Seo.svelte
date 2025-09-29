<script lang="ts">
  export let title: string;
  export let ogTitle: string | null = null;
  export let description: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={ogTitle ?? title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://www.samuel-fisher.com" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.samuel-fisher.com/assets/images/profile5.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={ogTitle ?? title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="https://www.samuel-fisher.com/assets/images/profile5.jpg" />
  
  <!-- Ensure search engines can find and render CSS -->
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.samuel-fisher.com" />
</svelte:head>
