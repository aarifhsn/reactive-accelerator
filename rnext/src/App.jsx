import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Marie Curie"
        imageId="szV5sdG"
        size={100}
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry"]}
        discovery="Radioactivity"
      />
      <Profile
        name="Albert Einstein"
        imageId="oGmf8hD"
        size={100}
        awards={["Nobel Prize in Physics"]}
        discovery="Theory of Relativity"
      />
      <Profile
        name="Isaac Newton"
        imageId="u3bZgnG"
        size={100}
        awards={[]}
        discovery="Laws of Motion and Universal Gravitation"
      />
    </div>
  );
}
