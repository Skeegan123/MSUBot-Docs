---
sidebar_position: 3
---

# Due Date Reminders

## Overview
This section provides a detailed look at the due date reminders feature. This feature is meant to give students a way to get reminders about upcoming due dates for the class.

## Setup
This section will explain how to setup the feature in your server.

:::important
If you did not use the template when creating your server, you will need to manually set the due date channel. You do this by going to the channel you want to use, and using the `/set_assignment_channel` command.
:::

1. **Bot Initialization**: Follow the steps in the [Setup](/docs/usage/setup) section to initialize the bot in your server.
2. **Enable the Feature**: Use the `/enable_reminders` command to enable the feature in your server.
3. **Upload the Schedule**: Use the `/upload_schedule` command to upload the schedule for the class. The schedule must be in a csv or xlsx file with the following format:

    | Due Date | Assignment | Type |
    | -------- | ---------- | ---- |
    | 1/1/2021 | Assignment 1 | Homework |
    | 1/2/2021 | Assignment 2 | Homework |
    | 1/3/2021 | Quiz 1 | Quiz/Test |
    | 1/4/2021 | Reading 1 | Reading |

    Note: The type can be anything. The bot will group assignments by type when sending reminders.

4. **Disable the Feature**: Use the `/disable_reminders` command to disable the feature in your server.

## How to Use
The bot will parse the given schedule, and will send reminders to the due date channel. These reminders consist of two different types, daily reminders, and weekly reminders. Daily reminders will be sent every day at 8:00 AM. Weekly reminders will be sent every Monday at 8:00 AM. The reminders will contain all of the assignments due that day/week. You can also add and remove assignments from the schedule using the `/add_assignment` and `/remove_assignment` commands.
