## doughnut-checker
has nothing to do with doughnuts but was originally conceived for a meetup group that met at Dunkin doughnuts.  

It is a web component based on LitElement which is a checker board.  It displays the board and pieces depending on the gamestate variable and fires click event with the board position and spacestate.  

### attributes
'match' => a String of 32 characters representing the board state.  "r" means normal red piece while "b" means normal black piece.  The default is "rrrreeeeeeeeeeeeeeeeeeeeeeeebbbb".  Background image files must be in the same directory as the element (for now).

### events
'spclk' => detail: { row: <int 0..7>, col: <int 0..7>}  The demo displays the data in an alert message.

It was scafolded using the open-wc.org generator.
    ```
    npm init @open-wc
    ```
