# Blood Diamond

A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.

## Clone the project

In order to clone the project, open your terminal and type:

```bash
git clone https://github.com/alexandrubb23/blood-diamond.git
```

## Navigate to the project

```bash
cd blood-diamond
```

## Installation

Install the app dependencies:

```bash
npm i
```

## Usage

Create a Diamond based on a letter from A-Z:

```bash
npm run create-diamond -- letter=C
```

## Tests

Run unit tests:

```bash
npm run test
```

## Extra bonus!!

I've created a new generic "Diamond" class which accepts a string array (string[]) in order to build diamonds with different chars (special-chars, A-Z, numbers, etc)! This new class is using Arrays as Data Structure.

Unfortunately, I couldn't find time in order to implement tests 😞 Sunday evening, family, etc. But I will do it in the next few days 😉

# Numbered Diamond

```bash
npm run create-numbered-diamond -- number=9
```

Will generate a 🔶 (diamond) from 1 to 9. The limit of the capacity of this is 26.

Expected output:

```
        1
       2 2
      3   3
     4     4
    5       5
   6         6
  7           7
 8             8
9               9
 8             8
  7           7
   6         6
    5       5
     4     4
      3   3
       2 2
        1
```

# Alphabetical Diamond

```bash
npm run create-alphabetical-diamond -- letter=I
```

Will generate a 🔶 (diamond) from A to I. The max letter of this is Z.

Expected output:

```
        A
       B B
      C   C
     D     D
    E       E
   F         F
  G           G
 H             H
I               I
 H             H
  G           G
   F         F
    E       E
     D     D
      C   C
       B B
        A
```

# Pawed Diamond

```bash
npm run create-pawed-diamond
```

Will generate a 🔶 (diamond) with 9 pows (#).

Expected output:

```
        #
       # #
      #   #
     #     #
    #       #
   #         #
  #           #
 #             #
#               #
 #             #
  #           #
   #         #
    #       #
     #     #
      #   #
       # #
        #
```

# Special Chars Diamond

```bash
npm run create-special-chars-diamond
```

Will generate a 🔶 (diamond) with 27 different special-chars.

Expected output:

```
                          !
                         # #
                        $   $
                       %     %
                      &       &
                     *         *
                    +           +
                   ,             ,
                  -               -
                 .                 .
                /                   /
               :                     :
              ;                       ;
             <                         <
            =                           =
           >                             >
          ?                               ?
         @                                 @
        [                                   [
       ]                                     ]
      ^                                       ^
     _                                         _
    `                                           `
   {                                             {
  |                                               |
 }                                                 }
~                                                   ~
 }                                                 }
  |                                               |
   {                                             {
    `                                           `
     _                                         _
      ^                                       ^
       ]                                     ]
        [                                   [
         @                                 @
          ?                               ?
           >                             >
            =                           =
             <                         <
              ;                       ;
               :                     :
                /                   /
                 .                 .
                  -               -
                   ,             ,
                    +           +
                     *         *
                      &       &
                       %     %
                        $   $
                         # #
                          !
```

Or create different diamonds in on go!

```bash
npm run create-numbered-diamond -- number=9 && npm run create-alphabetical-diamond -- letter=I && npm run create-pawed-diamond && npm run create-special-chars-diamond
```
