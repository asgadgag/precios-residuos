#!/usr/bin/env node
import { run } from '@crawlee/cli';
import fs from 'fs';
const sitemap = JSON.parse(fs.readFileSync('sitemap.json'));
await run({ 
  crawler: { 
    // Configura aquí según Crawlee CLI docs  
    sitemap 
  }, 
  outputDir: './data' 
});
