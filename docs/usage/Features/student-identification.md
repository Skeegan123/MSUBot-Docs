---
sidebar_position: 1
---

# Student Identification

## Overview
This section provides a detailed look at the student identification feature. This feature is meant to give professors a way to identify students in their class, make sure they are in the correct class, and change their nickname to their real name.

## Setup
This section will explain how to setup the feature in your server.

:::important
It is highly recommended that you created your server using the template as described in the [Setup](/docs/usage/setup) section. If not you will need to manually add some channels and roles to your server.
:::

:::important
It is highly recommended that you enable this before any students join your server, and leave it for the duration of the semester.
:::

1. **Bot Initialization**: Follow the steps in the [Setup](/docs/usage/setup) section to initialize the bot in your server.
2. **Enable the Feature**: Use the `/enable_verify` command to enable the feature in your server.
3. **Configuration**: If this is your first time enabling this feature, you will need to configure it.
    - **Get Class List**: You must download your classlist from D2L as an xlsx or csv file. Instrucutions on this to come.
    - **Upload Class List**: Use the `/upload_classlist` command to upload your class list to the bot.
4. **Disable the Feature**: Use the `/disable_verify` command to disable the feature in your server.

## How to Use
Once this feature is enabled, students will be prompted to verify their identity when they join the server. They will be asked to enter their name and student email. The bot will then check to see if the student is in the class list. If they are, they will be given the "Student" role, and their nickname will be changed to their real name. If they are not, they will be prompted to contact the professor if it was a mistake. The "Student" role will give them access to the class channels which will be hidden from them until they are verified.
