/**
 * Icon mapping utility
 * Maps icon names from WordPress to Lucide React icons
 */

import {
  Compass,
  Cpu,
  Database,
  Target,
  LineChart,
  GitBranch,
  Settings,
  Shield,
  FileSearch,
  Users,
  Workflow,
  Layers,
  Cloud,
  Sparkles,
  TrendingUp,
  BarChart3,
  Brain,
  Zap,
  Award,
  Globe,
  Lightbulb,
  Code,
  Building2,
  Landmark,
  Factory,
  Heart,
  GraduationCap,
  LucideIcon,
} from 'lucide-react'

// Icon name to component mapping
const iconMap: Record<string, LucideIcon> = {
  // Service icons
  compass: Compass,
  cpu: Cpu,
  database: Database,
  lightbulb: Lightbulb,
  code: Code,
  'bar-chart-3': BarChart3,

  // Capability icons
  target: Target,
  'line-chart': LineChart,
  'git-branch': GitBranch,
  settings: Settings,
  shield: Shield,
  'file-search': FileSearch,
  users: Users,
  workflow: Workflow,
  layers: Layers,
  cloud: Cloud,
  sparkles: Sparkles,
  'trending-up': TrendingUp,
  brain: Brain,
  zap: Zap,

  // Trust/stat icons
  award: Award,
  globe: Globe,
  building: Building2,
  'building-2': Building2,

  // Industry icons
  landmark: Landmark,
  factory: Factory,
  heart: Heart,
  'graduation-cap': GraduationCap,
}

/**
 * Get icon component by name
 * @param name - Icon name from WordPress
 * @returns Lucide icon component or Compass as fallback
 */
export function getIcon(name: string | undefined): LucideIcon {
  if (!name) return Compass
  return iconMap[name.toLowerCase()] || Compass
}

/**
 * Check if an icon name is valid
 */
export function isValidIcon(name: string): boolean {
  return name.toLowerCase() in iconMap
}

export { type LucideIcon }
