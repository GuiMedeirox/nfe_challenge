export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  unit: string;
  ncm?: string; // Classificação fiscal
  cfop?: string; // Código fiscal de operações
  icms?: {
    cst: string;
    aliquota: number;
    total:number
  };
  pis?: {
    cst: string;
    aliquota: number;
    total: number
  };
  cofins?: {
    cst: string;
    aliquota: number;
    total:number
  };
} 