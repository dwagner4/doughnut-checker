## doughnut-checker
has nothing to do with doughnuts but was originally conceived for a meetup group that met at Dunkin doughnuts.  

It is a web component based on LitElement which is a checker board.  It displays the board and pieces depending on the gamestate variable and fires click event with the board position and spacestate.  

### attributes
board state

### events
'spclk' => detail: { row: <int 0..7>, col: <int 0..7>}

It was scafolded using the open-wc.org generator.
    ```
    npm init @open-wc
    ```
