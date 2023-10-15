# Broadcast Channel Example

## Introduction

The Broadcast Channel Example is a simple web application that showcases the use of the Broadcast Channel API in JavaScript. This API enables communication between different browser tabs or windows with the same channel name. 

## Features

Send and receive messages between different browser tabs or windows.
Simple user interface for triggering and observing messages.


## How It Works

The Broadcast Channel API allows communication between browser contexts (tabs or windows) with the same channel name.
When a user signs in or signs out, the updateAuthState function is called to set or remove the 'userAuthenticated' item in localStorage, simulating the user's authentication status.
The authChannel is responsible for sending and receiving messages to and from other tabs.
The code listens for messages on the authChannel and updates the content displayed in real-time based on the received messages.
