import { Button } from "./Button";
import "../styles/sidebar.scss";

interface SideBarProps {
  genres: {
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }[];
  handleClickButton: (id: number) => void;
  selectedId: number;
}

export function SideBar({ genres, handleClickButton, selectedId }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}