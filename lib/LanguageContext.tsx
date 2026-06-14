"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Language } from "./types";
import { translations, Translations } from "./translations";
import { books as booksData, nasyids as nasyidsData, projects as projectsData, achievements as achievementsData } from "./data";
import type { Book, Nasyid, Project, Achievement } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  getBooks: () => Book[];
  getNasyids: () => Nasyid[];
  getProjects: () => Project[];
  getAchievements: () => Achievement[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "id" || savedLang === "ar")) {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    // Save to localStorage when language changes
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "ar" : "id"));
  };

  const t = translations[language];

  // Helper functions to get translated data
  const getBooks = (): Book[] => {
    const trans = t.dataBooks;
    return booksData.map((book, i) => ({
      ...book,
      title: trans.title[i] || book.title,
      description: trans.description[i] || book.description,
      genre: trans.genre[i] || book.genre,
    }));
  };

  const getNasyids = (): Nasyid[] => {
    const trans = t.dataNasyids;
    return nasyidsData.map((nasyid, i) => ({
      ...nasyid,
      title: trans.title[i] || nasyid.title,
      album: trans.album[i] || nasyid.album,
    }));
  };

  const getProjects = (): Project[] => {
    const trans = t.dataProjects;
    return projectsData.map((project, i) => ({
      ...project,
      title: trans.title[i] || project.title,
      description: trans.description[i] || project.description,
    }));
  };

  const getAchievements = (): Achievement[] => {
    const trans = t.dataAchievements;
    return achievementsData.map((achievement, i) => ({
      ...achievement,
      title: trans.title[i] || achievement.title,
      organization: trans.organization[i] || achievement.organization,
      description: trans.description[i] || achievement.description,
    }));
  };

  // Update document direction for Arabic
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, getBooks, getNasyids, getProjects, getAchievements }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}