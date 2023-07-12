// build.js

import fs from 'fs';

// 기존 빌드 명령 실행
import { execSync } from 'child_process';
execSync('vite build');

// .env 파일 생성
fs.writeFileSync('build/.env', `PORT=5173`);

