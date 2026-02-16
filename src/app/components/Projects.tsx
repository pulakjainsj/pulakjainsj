import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Design For Clickonik',
    description: 'I designed this PowerPoint presentation for Clickonik based on the content provided by the company. The slides are structured for clarity, professionalism, and visual appeal, ensuring an effective and engaging presentation. This project highlights my skills in presentation design and layout.',
    image: 'https://drive.google.com/thumbnail?id=1XNt-iZaXHCzpYqgjZzio3iUnPQKDoA5P&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGWihZ8aXg/q4ABmIaE0dp_tepf0PUffw/edit?utm_content=DAGWihZ8aXg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
  {
    id: 2,
    title: 'Podcast Cover Art Series',
    description: 'I designed this Instagram post and Youtube Banner for a podcast based on the content provided. The design promotes the show\'s theme of unfiltered success stories, enhancing engagement and brand presence.',
    image: 'https://drive.google.com/thumbnail?id=13NyIXU6zfFV5ktmKp-VpaTcFF07pEU_Y&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGh6xG-swQ/t0NslPQPE7lGHYW-xSgIhw/edit',
  },
  {
    id: 3,
    title: 'Design for Bengal Greens',
    description: 'I designed this financial year thank-you post for Bengal Green\'s. The idea was to show growth through plants growing on coins, representing progress and sustainability. I kept the design clean and professional to match the brand\'s green identity and clearly convey appreciation to customers.',
    image: 'https://drive.google.com/thumbnail?id=11R7kXDt7iD1kA3hTtGugPIInNdoKvmJ7&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGipRK3YTQ/Y7espIS4c6xQsJaE0qltKg/edit',
  },
  {
    id: 6,
    title: 'Magazine Layout & Editorial Design',
    description: 'I designed this LinkedIn post for Clickonik based on the content provided by the company. The post promotes Clickonik\'s participation in the India Affiliate Summit 2024, ensuring a professional and visually appealing announcement. This project highlights my skills in social media design and branding.',
    image: 'https://drive.google.com/thumbnail?id=1iVKqQd4ecscPs_TLS5BoclLPyHwHJ0i0&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAGVlsN5hCI/tLT2zGJM9Rgz2STrpFTBRw/edit',
  },
  {
    id: 8,
    title: 'Jain Prayer Booklet',
    description: 'I designed this spiritual artwork featuring Jain prayers and symbols. The elegant typography and sacred imagery create a meaningful visual for religious purposes.',
    image: 'https://drive.google.com/thumbnail?id=1ElaApj8zSIzFnTGMjYjACPtdHZzLO4zv&sz=w1080',
    tags: [],
    link: 'https://www.canva.com/design/DAF-ejMJiBA/g7hgvCQkQVUHmdsApQblfQ/edit',
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
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          {/* removed description */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isExpanded = expandedCards.includes(project.id);
            return (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pt-6 pb-6">
                <CardDescription className={`text-justify leading-relaxed text-sm ${isExpanded ? '' : 'line-clamp-2'}`}>{project.description}</CardDescription>
                {project.description.length > 150 && (
                  <button 
                    onClick={() => toggleExpand(project.id)}
                    className="text-sm text-primary hover:underline mt-2 text-left"
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