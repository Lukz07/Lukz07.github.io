/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = '';
let assetPrefix = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  console.log(repo);

  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

console.log(basePath)

const nextConfig = {
  basePath: basePath,
  assetPrefix: assetPrefix
}

module.exports = nextConfig
