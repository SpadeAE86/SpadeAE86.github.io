import { GitContributors } from "C:/Blog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_25562f735eb9fdaaf26c9350632d2b4d/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Blog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_25562f735eb9fdaaf26c9350632d2b4d/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
