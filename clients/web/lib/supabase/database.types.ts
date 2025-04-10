export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  se_home: {
    Tables: {
      authors: {
        Row: {
          bio: string | null
          blog: string
          created_on: string | null
          deleted_on: string | null
          display_id: number
          email: string | null
          id: string
          meta: unknown | null
          name: string
          organization: string
          picture: string | null
          preferences: Json | null
          social_links: Json | null
          updated_on: string | null
        }
        Insert: {
          bio?: string | null
          blog: string
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          email?: string | null
          id?: string
          meta?: unknown | null
          name: string
          organization: string
          picture?: string | null
          preferences?: Json | null
          social_links?: Json | null
          updated_on?: string | null
        }
        Update: {
          bio?: string | null
          blog?: string
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          email?: string | null
          id?: string
          meta?: unknown | null
          name?: string
          organization?: string
          picture?: string | null
          preferences?: Json | null
          social_links?: Json | null
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "authors_blogs_fkey"
            columns: ["blog"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "authors_organizations_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author: string
          blog: string
          content: string
          created_on: string | null
          deleted_on: string | null
          display_id: number
          featured_image: string | null
          id: string
          meta: unknown | null
          preferences: Json | null
          published_on: string | null
          slug: string
          status: string
          title: string
          updated_on: string | null
        }
        Insert: {
          author: string
          blog: string
          content: string
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          featured_image?: string | null
          id?: string
          meta?: unknown | null
          preferences?: Json | null
          published_on?: string | null
          slug: string
          status?: string
          title: string
          updated_on?: string | null
        }
        Update: {
          author?: string
          blog?: string
          content?: string
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          featured_image?: string | null
          id?: string
          meta?: unknown | null
          preferences?: Json | null
          published_on?: string | null
          slug?: string
          status?: string
          title?: string
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_authors_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_posts_blogs_fkey"
            columns: ["blog"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts_tags_associations: {
        Row: {
          blog_post: string
          created_on: string | null
          deleted_on: string | null
          tag: string
          updated_on: string | null
        }
        Insert: {
          blog_post: string
          created_on?: string | null
          deleted_on?: string | null
          tag: string
          updated_on?: string | null
        }
        Update: {
          blog_post?: string
          created_on?: string | null
          deleted_on?: string | null
          tag?: string
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_tags_blog_post_fkey"
            columns: ["blog_post"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_posts_tags_tag_fkey"
            columns: ["tag"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blogs: {
        Row: {
          created_on: string | null
          deleted_on: string | null
          description: string | null
          display_id: number
          id: string
          meta: unknown | null
          name: string
          organization: string
          preferences: Json | null
          slug: string
          updated_on: string | null
        }
        Insert: {
          created_on?: string | null
          deleted_on?: string | null
          description?: string | null
          display_id?: number
          id?: string
          meta?: unknown | null
          name: string
          organization: string
          preferences?: Json | null
          slug: string
          updated_on?: string | null
        }
        Update: {
          created_on?: string | null
          deleted_on?: string | null
          description?: string | null
          display_id?: number
          id?: string
          meta?: unknown | null
          name?: string
          organization?: string
          preferences?: Json | null
          slug?: string
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blogs_organizations_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscriptions: {
        Row: {
          created_on: string | null
          deleted_on: string | null
          display_id: number
          email: string | null
          id: string
          meta: unknown | null
          organization: string | null
          preferences: Json | null
          updated_on: string | null
        }
        Insert: {
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          email?: string | null
          id?: string
          meta?: unknown | null
          organization?: string | null
          preferences?: Json | null
          updated_on?: string | null
        }
        Update: {
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          email?: string | null
          id?: string
          meta?: unknown | null
          organization?: string | null
          preferences?: Json | null
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_subscriptions_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_on: string | null
          deleted_on: string | null
          display_id: number
          email: string | null
          id: string
          meta: unknown | null
          name: string | null
          owner: string | null
          preferences: Json | null
          updated_on: string | null
        }
        Insert: {
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          email?: string | null
          id?: string
          meta?: unknown | null
          name?: string | null
          owner?: string | null
          preferences?: Json | null
          updated_on?: string | null
        }
        Update: {
          created_on?: string | null
          deleted_on?: string | null
          display_id?: number
          email?: string | null
          id?: string
          meta?: unknown | null
          name?: string | null
          owner?: string | null
          preferences?: Json | null
          updated_on?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          blog: string
          created_on: string | null
          deleted_on: string | null
          description: string | null
          display_id: number
          id: string
          meta: unknown | null
          name: string
          preferences: Json | null
          slug: string
          updated_on: string | null
        }
        Insert: {
          blog: string
          created_on?: string | null
          deleted_on?: string | null
          description?: string | null
          display_id?: number
          id?: string
          meta?: unknown | null
          name: string
          preferences?: Json | null
          slug: string
          updated_on?: string | null
        }
        Update: {
          blog?: string
          created_on?: string | null
          deleted_on?: string | null
          description?: string | null
          display_id?: number
          id?: string
          meta?: unknown | null
          name?: string
          preferences?: Json | null
          slug?: string
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_blogs_fkey"
            columns: ["blog"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  se_home: {
    Enums: {},
  },
} as const
