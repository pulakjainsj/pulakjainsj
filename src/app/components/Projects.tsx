import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Design For Clickonik',
    description: 'Made this PowerPoint deck for Clickonik using their content. They needed something clean and professional that didn\'t feel too corporate. Kept the slides simple so the message comes through without too much clutter.',
    image: 'https://drive.google.com/thumbnail?id=1XNt-iZaXHCzpYqgjZzio3iUnPQKDoA5P&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGWihZ8aXg/q4ABmIaE0dp_tepf0PUffw/edit?utm_content=DAGWihZ8aXg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    id: 2,
    title: 'Podcast Cover Art Series',
    description: 'Made Instagram post and YouTube banner for a podcast about success stories. Wanted something bold that catches attention on social media. Tried different color combinations to see what works best on both platforms.',
    image: 'https://drive.google.com/thumbnail?id=13NyIXU6zfFV5ktmKp-VpaTcFF07pEU_Y&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGh6xG-swQ/t0NslPQPE7lGHYW-xSgIhw/edit',
  },
  {
    id: 3,
    title: 'Design for Bengal Greens',
    description: 'Bengal Greens needed a year-end thank you post. Came up with this plants-on-coins idea - felt right for their sustainability angle. Used their green colors but made it look friendly instead of too formal.',
    image: 'https://drive.google.com/thumbnail?id=11R7kXDt7iD1kA3hTtGugPIInNdoKvmJ7&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGipRK3YTQ/Y7espIS4c6xQsJaE0qltKg/edit',
  },
  {
    id: 6,
    title: 'Magazine Layout & Editorial Design',
    description: 'Clickonik was attending the India Affiliate Summit 2024, so they needed a LinkedIn post to announce it. Made something professional but still eye-catching enough to stop the scroll on LinkedIn feeds.',
    image: 'https://drive.google.com/thumbnail?id=1iVKqQd4ecscPs_TLS5BoclLPyHwHJ0i0&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGVlsN5hCI/tLT2zGJM9Rgz2STrpFTBRw/edit',
  },
  {
    id: 7,
    title: 'Holi Festival Design for Bengal Greens',
    description: 'Holi post for Bengal Greens. Used bright colors and festival energy but kept their fresh produce angle. Wanted it to look festive without going too crazy with the design.',
    image: 'https://drive.google.com/thumbnail?id=1nV5AR-C2oyEPYL71zVlQu-zVzOdzdDFc&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGhtnlNvB8/6PqImSjvWKLa4sCkEgo3Gw/edit?utm_content=DAGhtnlNvB8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    id: 8,
    title: 'Jain Prayer Booklet',
    description: 'Worked on spiritual artwork with Jain prayers and traditional symbols. This one needed a lot of care - went with classic typography and clean layouts to keep it respectful and meaningful.',
    image: 'https://drive.google.com/thumbnail?id=1ElaApj8zSIzFnTGMjYjACPtdHZzLO4zv&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAF-ejMJiBA/g7hgvCQkQVUHmdsApQblfQ/edit',
  },
  {
    id: 9,
    title: 'Logo Design for Bengal Greens',
    description: 'Bengal Greens wanted a logo that feels fresh and connects with their brand. Worked on multiple concepts before landing on this - kept it bold, simple, and something that actually stands out on packaging and their socials. Pretty happy with how it turned out.',
    image: 'https://drive.google.com/thumbnail?id=14KjGn7rNmy1hJKhdRY9zUo2MSlUhS1lO&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGhtzoz1Kk/RrYVeDuQ_fANTDFKgD3bzw/edit?utm_content=DAGhtzoz1Kk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    id: 10,
    title: 'The Daily Grind - Coffee Shop Branding',
    description: 'Made this Instagram post for a coffee shop promotion. Wanted those warm brown tones to give it that cozy coffee vibe. They were running a first purchase discount, so kept the design simple enough that the offer stands out but still looks inviting.',
    image: 'https://drive.google.com/thumbnail?id=1oa2gtDlBaOYsYtxijcCDBT0yvDjdcgc8&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGtCfZG0vI/n6GJxLPXcTpij_3sOJQ2OQ/edit?utm_content=DAGtCfZG0vI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
];

export function Projects() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Design Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of graphic design work including social media graphics, branding materials, logo designs, and creative campaigns for various clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isExpanded = expandedCards.includes(project.id);
            return (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={`${project.title} - Graphic design project by Pulak Jain showcasing ${project.title.toLowerCase()}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pt-6 pb-6">
                <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                <CardDescription className={`text-justify leading-relaxed text-sm ${isExpanded ? '' : 'line-clamp-2'}`}>{project.description}</CardDescription>
                {project.description.length > 150 && (
                  <button 
                    onClick={() => toggleExpand(project.id)}
                    className="text-sm text-primary hover:underline mt-2 text-left"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? 'Show less description' : 'Show full description'}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}