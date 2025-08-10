import { type User, type InsertUser, type Quote, type InsertQuote, type Message, type InsertMessage, type Question, type InsertQuestion } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getQuotes(): Promise<Quote[]>;
  createQuote(quote: InsertQuote): Promise<Quote>;
  
  getMessages(): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  
  createQuestion(question: InsertQuestion): Promise<Question>;
  getQuestions(): Promise<Question[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private quotes: Map<string, Quote>;
  private messages: Map<string, Message>;
  private questions: Map<string, Question>;

  constructor() {
    this.users = new Map();
    this.quotes = new Map();
    this.messages = new Map();
    this.questions = new Map();
    
    // Initialize with some default approved quotes
    const defaultQuotes = [
      { text: "It's ok to not be ok", author: "Unknown" },
      { text: "Be kind for everyone you meet is fighting a battle", author: "Unknown" },
      { text: "Healing isn't linear, and that's perfectly okay", author: "Anonymous" },
      { text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity", author: "Anonymous" },
      { text: "Progress, not perfection", author: "Unknown" },
      { text: "You are braver than you believe, stronger than you seem, and smarter than you think", author: "A.A. Milne" },
      { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us", author: "Ralph Waldo Emerson" },
      { text: "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about", author: "Unknown" },
      { text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going", author: "Noam Shpancer" },
      { text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesn't make you a negative person. It makes you human", author: "Lori Deschene" }
    ];
    
    defaultQuotes.forEach(quote => {
      const id = randomUUID();
      this.quotes.set(id, {
        id,
        text: quote.text,
        author: quote.author,
        createdAt: new Date(),
        approved: "approved"
      });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values())
      .filter(quote => quote.approved === "approved")
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }
  
  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = randomUUID();
    const quote: Quote = {
      id,
      text: insertQuote.text,
      author: insertQuote.author || "Anonymous",
      createdAt: new Date(),
      approved: "pending"
    };
    this.quotes.set(id, quote);
    return quote;
  }
  
  async getMessages(): Promise<Message[]> {
    return Array.from(this.messages.values())
      .sort((a, b) => a.timestamp!.getTime() - b.timestamp!.getTime());
  }
  
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const message: Message = {
      ...insertMessage,
      id,
      timestamp: new Date()
    };
    this.messages.set(id, message);
    return message;
  }
  
  async createQuestion(insertQuestion: InsertQuestion): Promise<Question> {
    const id = randomUUID();
    const question: Question = {
      id,
      content: insertQuestion.content,
      email: insertQuestion.email || null,
      createdAt: new Date()
    };
    this.questions.set(id, question);
    return question;
  }
  
  async getQuestions(): Promise<Question[]> {
    return Array.from(this.questions.values())
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }
}

export const storage = new MemStorage();
