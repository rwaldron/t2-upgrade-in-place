# t2-upgrade-in-place


1. `git clone https://github.com/rwaldron/t2-upgrade-in-place.git`
2. `cd t2-upgrade-in-place`
3. Open two terminals, side by side
4. In one, run `node index.js`
5. In the other, run `node client.js`
6. Once `client.js` runs, open the source and observe that the version is 2
7. Re-run `node client.js`
8. Once `client.js` runs, open the source and observe that the version is 1
9. Repeating this will change the application version each time, flipping back and forth between 1 and 2.
