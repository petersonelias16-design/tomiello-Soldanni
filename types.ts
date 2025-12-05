import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}

export interface AnalysisResult {
  summary: string;
  suggestedArea: string;
  complexity: string;
  recommendation: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  oab?: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export enum LegalArea {
  CONSUMER = 'Direito do Consumidor',
  FAMILY = 'Direito de Família',
  LABOR = 'Direito do Trabalho',
  CIVIL = 'Direito Processual Civil',
  LABOR_PROCESS = 'Direito Processual do Trabalho',
  OTHER = 'Outros'
}