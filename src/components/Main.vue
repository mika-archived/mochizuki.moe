<template lang="pug">
  b-container
    section
      .text-center
        .icon
          .rounded
            img(src="https://www.gravatar.com/avatar/8f7571eb815b4c6b2ef883b1c8ed97dd?s=256")

        h2 Fuyuno Mikazuki

    b-row.justify-content-md-center
      b-col(md="12" lg="6")
        b-card(title="Skills")
          .card-text(v-for="(values, key) in skills")
            section
              p {{capitalize(key)}}
              ul(v-for="value in values")
                li {{value}}

      b-col(md="12" lg="6")
        b-card(title="Projects")
          .card-text
            p Projects I am involved in ...
            .projects(v-for="project in projects")
              .project
                h5 {{project.name}}
                small
                  a(:href="project.url") {{project.url}}
                p {{project.work}}


        b-card(title="Interested technologies")
          .card-text
            ul(v-for="interest in interests")
              li {{interest}} 

        b-card(title="Contact")
          .card-text
            ul(v-for="contact in contacts")
              li
                | {{contact.name}} 
                a(:href="contact.link.href" target="_blank") {{contact.link.text}}

</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      skills: {
        languages: [
          "C#",
          "Ruby",
          "AltJS (TypeScript, CoffeeScript)",
          "JavaScript",
          "HTML (Slim, Pug, Haml)",
          "CSS (Sass)",
          "Java"
        ],
        frameworks: [
          "Ruby on Rails",
          "Sinatra",
          "Prism",
          "React",
          "Vue",
          "Bootstrap"
        ],
        platforms: [
          "Web (Frontend, Backend, Server, Electron)",
          "Windows (WPF, UWP)",
          "Windows 10 Mobile"
        ]
      },
      projects: [
        {
          name: "CLEN",
          url: "https://clen.be/",
          work: "Frontend, Backend and Server-Side Engineer"
        },
        {
          name: "MAngaNIA",
          url: "https://mangania.jp/",
          work: "Backend Engineer"
        }
      ],
      contacts: [
        {
          name: "Twitter",
          link: {
            href: "https://twitter.com/MikazukiFuyuno",
            text: "@MikazukiFuyuno"
          }
        },
        {
          name: "GitHub",
          link: {
            href: "https://github.com/mika-f",
            text: "@mika-f"
          }
        },
        {
          name: "E-Mail",
          link: {
            href: "mailto:me@mochizuki.moe",
            text: "me@mochizuki.moe"
          }
        }
      ],
      interests: ["Unity (Unity3D)", "Blockchain", "Machine Learning"]
    };
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  padding-bottom: 10px;
}

.rounded {
  border-radius: 100% !important;
  border: solid #cccccc 1px;
  box-shadow: 1.5px 1.5px 3px #aaaaaa;
  margin: 0 auto;
  height: 194px;
  width: 194px;

  img {
    border-radius: 100%;
    border: solid white 5px;
    height: 192px;
    width: 192px;
  }
}

.projects {
  .project {
    padding: 5px 10px;

    h5 {
      margin-bottom: 0;
    }
  }
}

// Override
.card {
  margin-bottom: 1.25rem;
}

ul {
  margin-bottom: 0.1em;
}

section {
  margin-bottom: 1.5rem;
}
</style>
