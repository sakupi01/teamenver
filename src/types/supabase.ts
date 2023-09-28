export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      agreements: {
        Row: {
          created_at: string
          id: string
          is_agreed: boolean
          team_board_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_agreed?: boolean
          team_board_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_agreed?: boolean
          team_board_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'agreements_team_board_id_fkey'
            columns: ['team_board_id']
            referencedRelation: 'team_boards'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'agreements_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      board_details: {
        Row: {
          board_id: string
          builder: string | null
          created_at: string
          css_library: string | null
          formatter: string | null
          framework: string | null
          hygen: string | null
          id: string
          isGit: string | null
          lint_staged_husky: string | null
          linter: string | null
          manager: string | null
          ui_library: string | null
          updated_at: string
          volta: string | null
          vscode: string | null
        }
        Insert: {
          board_id: string
          builder?: string | null
          created_at?: string
          css_library?: string | null
          formatter?: string | null
          framework?: string | null
          hygen?: string | null
          id?: string
          isGit?: string | null
          lint_staged_husky?: string | null
          linter?: string | null
          manager?: string | null
          ui_library?: string | null
          updated_at?: string
          volta?: string | null
          vscode?: string | null
        }
        Update: {
          board_id?: string
          builder?: string | null
          created_at?: string
          css_library?: string | null
          formatter?: string | null
          framework?: string | null
          hygen?: string | null
          id?: string
          isGit?: string | null
          lint_staged_husky?: string | null
          linter?: string | null
          manager?: string | null
          ui_library?: string | null
          updated_at?: string
          volta?: string | null
          vscode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'board_details_board_id_fkey'
            columns: ['board_id']
            referencedRelation: 'boards'
            referencedColumns: ['id']
          }
        ]
      }
      boards: {
        Row: {
          created_at: string
          id: string
          is_public: boolean
          team_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_public: boolean
          team_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_public?: boolean
          team_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'boards_team_id_fkey'
            columns: ['team_id']
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'boards_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      comments: {
        Row: {
          board_id: string
          content: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          board_id: string
          content: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          board_id?: string
          content?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'comments_board_id_fkey'
            columns: ['board_id']
            referencedRelation: 'boards'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      css_libraries: {
        Row: {
          commandToRun: string | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          commandToRun?: string | null
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          commandToRun?: string | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      frameworks: {
        Row: {
          ableToSetWithNode: boolean
          id: string
          name: string | null
          peerDependencies: Json | null
          webframe_have_worked_with_count: number | null
          webframe_want_to_work_with_count: number | null
        }
        Insert: {
          ableToSetWithNode?: boolean
          id: string
          name?: string | null
          peerDependencies?: Json | null
          webframe_have_worked_with_count?: number | null
          webframe_want_to_work_with_count?: number | null
        }
        Update: {
          ableToSetWithNode?: boolean
          id?: string
          name?: string | null
          peerDependencies?: Json | null
          webframe_have_worked_with_count?: number | null
          webframe_want_to_work_with_count?: number | null
        }
        Relationships: []
      }
      likes: {
        Row: {
          comment_id: string
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'likes_comment_id_fkey'
            columns: ['comment_id']
            referencedRelation: 'comments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'likes_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      project_details: {
        Row: {
          api_url: string | null
          created_at: string
          design_url: string | null
          else: string | null
          functional_requirements: string | null
          id: string
          nonfunctional_requirements: string | null
          project_abstract: string | null
          team_id: string
          updated_at: string
        }
        Insert: {
          api_url?: string | null
          created_at?: string
          design_url?: string | null
          else?: string | null
          functional_requirements?: string | null
          id?: string
          nonfunctional_requirements?: string | null
          project_abstract?: string | null
          team_id: string
          updated_at?: string
        }
        Update: {
          api_url?: string | null
          created_at?: string
          design_url?: string | null
          else?: string | null
          functional_requirements?: string | null
          id?: string
          nonfunctional_requirements?: string | null
          project_abstract?: string | null
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'project_details_team_id_fkey'
            columns: ['team_id']
            referencedRelation: 'teams'
            referencedColumns: ['id']
          }
        ]
      }
      team_board_details: {
        Row: {
          created_at: string
          css_library: string
          formatter: string
          framework: string
          id: string
          linter: string
          team_board_id: string
          ui_library: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          css_library: string
          formatter: string
          framework: string
          id?: string
          linter: string
          team_board_id: string
          ui_library: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          css_library?: string
          formatter?: string
          framework?: string
          id?: string
          linter?: string
          team_board_id?: string
          ui_library?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'team_board_details_team_board_id_fkey'
            columns: ['team_board_id']
            referencedRelation: 'team_boards'
            referencedColumns: ['id']
          }
        ]
      }
      team_boards: {
        Row: {
          created_at: string
          id: string
          team_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          team_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'team_boards_team_id_fkey'
            columns: ['team_id']
            referencedRelation: 'teams'
            referencedColumns: ['id']
          }
        ]
      }
      team_member: {
        Row: {
          created_at: string
          team_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          team_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          team_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'team_member_team_id_fkey'
            columns: ['team_id']
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'team_member_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      teams: {
        Row: {
          admin_id: string
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          admin_id: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          admin_id?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'teams_admin_id_fkey'
            columns: ['admin_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      ui_libraries: {
        Row: {
          commandToInstall: string | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          commandToInstall?: string | null
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          commandToInstall?: string | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          github_url: string | null
          id: string
          image_url: string
          is_online: boolean
          last_seen: string | null
          name: string
          twitter_url: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          github_url?: string | null
          id: string
          image_url?: string
          is_online?: boolean
          last_seen?: string | null
          name: string
          twitter_url?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          github_url?: string | null
          id?: string
          image_url?: string
          is_online?: boolean
          last_seen?: string | null
          name?: string
          twitter_url?: string | null
          updated_at?: string
        }
        Relationships: []
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
