#!/usr/bin/env node

const secret = '';

import { totp } from 'otplib';
console.log(totp.generate(secret));

import { authenticator } from 'otplib';
console.log(authenticator.generate(secret));
