import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text='GPT-3 stands for "Generative Pre-trained Transformer 3." Its a state-of-the-art language processing model developed by OpenAI. GPT-3 is part of a family of models known as Transformers, which are designed to understand and generate human-like text based on the input they receive.' />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opiChatbots are virtual assistants that mimic human conversation. They're either rule-based or AI-powered, with the latter being more advanced and adaptable. From customer service to education, they're revolutionizing how we interact with technology.nion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="A knowledge base is a database of information. It's a go-to resource for answers, solutions, and insights on a specific topic or domain." />
      <Feature title="Education" text="ChatGPT enhances education through personalized learning, interactive lessons, and instant answers to students' questions." />
    </div>
  </div>
);

export default WhatGPT3;
