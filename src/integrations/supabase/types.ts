export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      audit_requests: {
        Row: {
          annual_revenue: Database["public"]["Enums"]["revenue_range"] | null
          created_at: string
          id: string
          industry: Database["public"]["Enums"]["industry_vertical"]
          interested_in_retainer: boolean | null
          lead_id: string
          pain_points: string
        }
        Insert: {
          annual_revenue?: Database["public"]["Enums"]["revenue_range"] | null
          created_at?: string
          id?: string
          industry: Database["public"]["Enums"]["industry_vertical"]
          interested_in_retainer?: boolean | null
          lead_id: string
          pain_points: string
        }
        Update: {
          annual_revenue?: Database["public"]["Enums"]["revenue_range"] | null
          created_at?: string
          id?: string
          industry?: Database["public"]["Enums"]["industry_vertical"]
          interested_in_retainer?: boolean | null
          lead_id?: string
          pain_points?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_requests_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: true
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      blueprint_requests: {
        Row: {
          budget: Database["public"]["Enums"]["budget_range"] | null
          created_at: string
          has_existing_pitch_deck: boolean | null
          id: string
          industry: Database["public"]["Enums"]["industry_vertical"]
          lead_id: string
          project_description: string | null
          project_name: string | null
          stage: Database["public"]["Enums"]["project_stage"] | null
        }
        Insert: {
          budget?: Database["public"]["Enums"]["budget_range"] | null
          created_at?: string
          has_existing_pitch_deck?: boolean | null
          id?: string
          industry: Database["public"]["Enums"]["industry_vertical"]
          lead_id: string
          project_description?: string | null
          project_name?: string | null
          stage?: Database["public"]["Enums"]["project_stage"] | null
        }
        Update: {
          budget?: Database["public"]["Enums"]["budget_range"] | null
          created_at?: string
          has_existing_pitch_deck?: boolean | null
          id?: string
          industry?: Database["public"]["Enums"]["industry_vertical"]
          lead_id?: string
          project_description?: string | null
          project_name?: string | null
          stage?: Database["public"]["Enums"]["project_stage"] | null
        }
        Relationships: [
          {
            foreignKeyName: "blueprint_requests_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: true
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          company_name: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          last_updated: string | null
          lead_type: Database["public"]["Enums"]["lead_type"]
          notes: string | null
          phone: string | null
          source: string | null
          status: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          last_updated?: string | null
          lead_type: Database["public"]["Enums"]["lead_type"]
          notes?: string | null
          phone?: string | null
          source?: string | null
          status?: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          last_updated?: string | null
          lead_type?: Database["public"]["Enums"]["lead_type"]
          notes?: string | null
          phone?: string | null
          source?: string | null
          status?: string
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
      budget_range: "under_15k" | "15k_to_30k" | "30k_to_50k" | "over_50k"
      industry_vertical:
        | "healthtech"
        | "fintech"
        | "esg"
        | "ai_governance"
        | "other"
      lead_type: "blueprint" | "audit" | "partnership"
      project_stage: "pre_seed" | "seed" | "series_a" | "corporate"
      revenue_range: "under_1m" | "1m_to_10m" | "10m_to_50m" | "over_50m"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      budget_range: ["under_15k", "15k_to_30k", "30k_to_50k", "over_50k"],
      industry_vertical: [
        "healthtech",
        "fintech",
        "esg",
        "ai_governance",
        "other",
      ],
      lead_type: ["blueprint", "audit", "partnership"],
      project_stage: ["pre_seed", "seed", "series_a", "corporate"],
      revenue_range: ["under_1m", "1m_to_10m", "10m_to_50m", "over_50m"],
    },
  },
} as const
