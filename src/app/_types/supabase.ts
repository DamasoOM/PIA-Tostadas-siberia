export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string
          colony: string
          id: number
          number: number
          state: string | null
          street: string
          user_id: number
        }
        Insert: {
          city: string
          colony: string
          id?: number
          number: number
          state?: string | null
          street: string
          user_id: number
        }
        Update: {
          city?: string
          colony?: string
          id?: number
          number?: number
          state?: string | null
          street?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      adquisitions: {
        Row: {
          amount: number
          cost: number
          id: number
          measures_id: number
          note: string
          user_id: number
        }
        Insert: {
          amount: number
          cost: number
          id?: number
          measures_id: number
          note: string
          user_id: number
        }
        Update: {
          amount?: number
          cost?: number
          id?: number
          measures_id?: number
          note?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "adquisitions_measures_id_fkey"
            columns: ["measures_id"]
            isOneToOne: false
            referencedRelation: "measures"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "adquisitions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      combos: {
        Row: {
          description: string
          id: number
          name: string
          price: number
        }
        Insert: {
          description: string
          id?: number
          name: string
          price: number
        }
        Update: {
          description?: string
          id?: number
          name?: string
          price?: number
        }
        Relationships: []
      }
      dishes: {
        Row: {
          category: string | null
          description: string
          id: number
          name: string
          price: number
          recipe_id: number
        }
        Insert: {
          category?: string | null
          description?: string
          id?: number
          name?: string
          price: number
          recipe_id: number
        }
        Update: {
          category?: string | null
          description?: string
          id?: number
          name?: string
          price?: number
          recipe_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "dishes_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      dishes_combos: {
        Row: {
          amount: number
          combo_id: number
          dish_id: number
        }
        Insert: {
          amount: number
          combo_id: number
          dish_id: number
        }
        Update: {
          amount?: number
          combo_id?: number
          dish_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "dishes_combos_combo_id_fkey"
            columns: ["combo_id"]
            isOneToOne: false
            referencedRelation: "combos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dishes_combos_dish_id_fkey"
            columns: ["dish_id"]
            isOneToOne: false
            referencedRelation: "dishes"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          amount: number
          id: number
          measures_id: number
          name: string
        }
        Insert: {
          amount: number
          id?: number
          measures_id: number
          name?: string
        }
        Update: {
          amount?: number
          id?: number
          measures_id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_measures_id_fkey"
            columns: ["measures_id"]
            isOneToOne: false
            referencedRelation: "measures"
            referencedColumns: ["id"]
          },
        ]
      }
      measures: {
        Row: {
          description: string
          id: number
        }
        Insert: {
          description: string
          id?: number
        }
        Update: {
          description?: string
          id?: number
        }
        Relationships: []
      }
      orders: {
        Row: {
          address_id: number
          createduser__at: string
          id: number
          note: string
          user_id: number
        }
        Insert: {
          address_id: number
          createduser__at?: string
          id?: number
          note: string
          user_id: number
        }
        Update: {
          address_id?: number
          createduser__at?: string
          id?: number
          note?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_combos: {
        Row: {
          amount: number
          combo_id: number
          order_id: number
        }
        Insert: {
          amount: number
          combo_id: number
          order_id: number
        }
        Update: {
          amount?: number
          combo_id?: number
          order_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_combos_combo_id_fkey"
            columns: ["combo_id"]
            isOneToOne: false
            referencedRelation: "combos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_combos_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_dishes: {
        Row: {
          amount: number
          dish_id: number
          order_id: number
        }
        Insert: {
          amount: number
          dish_id: number
          order_id: number
        }
        Update: {
          amount?: number
          dish_id?: number
          order_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_dishes_dish_id_fkey"
            columns: ["dish_id"]
            isOneToOne: false
            referencedRelation: "dishes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_dishes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      recipes_inventory: {
        Row: {
          inventory_id: number
          measures_id: number
          recipe_id: number
        }
        Insert: {
          inventory_id: number
          measures_id: number
          recipe_id: number
        }
        Update: {
          inventory_id?: number
          measures_id?: number
          recipe_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "recipes_inventory_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipes_inventory_measures_id_fkey"
            columns: ["measures_id"]
            isOneToOne: false
            referencedRelation: "measures"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipes_inventory_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string
          full_name: string
          id: number
          role_id: number
        }
        Insert: {
          email?: string
          full_name?: string
          id?: number
          role_id: number
        }
        Update: {
          email?: string
          full_name?: string
          id?: number
          role_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
