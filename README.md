## Algorithm Guessing Game

This is a simple interactive Algorithm Guessing Game built with React that uses a binary tree structure to guide users through a series of questions. The goal of the game is to guess a specific algorithm based on the user's answers to yes/no questions.

## Features

A series of yes/no questions to guess the correct algorithm.

Dynamic navigation through a binary tree structure.

Resets automatically after reaching the conclusion.

Leaf nodes (algorithm guesses) hide the yes/no buttons, while intermediate questions allow further navigation.

## How To Play

The game starts with a root question, like "Is it a greedy algorithm?".

Based on your answer (Yes/No), the game will ask a follow-up question or make a guess about the algorithm.

If the game guesses an algorithm (leaf node), it will display the answer and allow you to restart the game by clicking "Play Again".

If further questions are possible, you’ll be able to continue navigating by answering Yes/No.

## Project Structure

src/Game.js: The main component that renders the game and handles the logic.

src/tree.js: The binary tree data structure that powers the game's question flow.

## Future Enhancements

Expand the algorithm database with more questions and algorithms.

Add more interactive features like hints or a progress tracker.
