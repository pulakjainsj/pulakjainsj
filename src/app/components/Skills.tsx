import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Palette, Camera, Layout, BarChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Design Tools',
    icon: Palette,
    skills: ['Canva', 'CorelDRAW', 'Adobe Photoshop', 'Figma', 'User Interface Design'],
  },
  {
    title: 'Design Skills',
    icon: Layout,
    skills: ['Logo Design', 'Typography', 'Layout Design', 'Website'],
  },
  {
    title: 'Photography & Editing',
    icon: Camera,
    skills: ['Photo Editing', 'Image Retouching', 'Photo Composition', 'Lightroom', 'Color Correction'],
  },
  {
    title: 'Productivity Skills',
    icon: BarChart,
    skills: ['Excel', 'MS Word', 'PowerPoint'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e8e8e8]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
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