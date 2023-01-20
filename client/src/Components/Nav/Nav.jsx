export default function Nav() {
  return (
    <div>
      <label htmlFor="filters">Choose a filter: </label>
      <select name="filters" id="filters">
        <option value="">--Please choose an option--</option>
        <option value="apiVideogames">Known videogames</option>
        <option value="dbVideogames">Created videogames</option>
      </select>
      <label htmlFor="genres">Choose a genre: </label>
      <select name="genres" id="genres">
        <option value="">--Please choose an option--</option>
        <option value="Action">Action</option>
        <option value="Indie">Indie</option>
        <option value="Adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="Strategy">Strategy</option>
        <option value="Shooter">Shooter</option>
        <option value="Casual">Casual</option>
        <option value="Simulation">Simulation</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Arcade">Arcade</option>
        <option value="Platformer">Platformer</option>
        <option value="Racing">Racing</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Sports">Sports</option>
        <option value="Fighting">Fighting</option>
        <option value="Family">Family</option>
        <option value="Board Games">Board Games</option>
        <option value="Educational">Educational</option>
        <option value="Card">Card</option>
      </select>
      <label htmlFor="videogames">Order by name: </label>
      <select name="videogames" id="videogames">
        <option value="">--Please choose an option--</option>
        <option value="upward">Upward</option>
        <option value="downward">Downward</option>
      </select>
      <label htmlFor="rating">Order by rating: </label>
      <select name="rating" id="rating">
        <option value="">--Please choose an option--</option>
        <option value="upward">Upward</option>
        <option value="downward">Downward</option>
      </select>
      <input type="text" placeholder="Videogame´s name" />
      <button>Search</button>
    </div>
  );
}
