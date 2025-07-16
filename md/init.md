# 🚀 TRIBUMALA STORE - SESSION INIT

## 📋 **INSTRUCCIONES PARA RETOMAR SESIÓN**

**¡Hola! Soy tu desarrollador senior de Tribumala Store. Para retomar nuestro trabajo, lee este archivo primero.**

---

## 🎯 **CONTEXTO DEL PROYECTO**

### **¿Qué estamos construyendo?**
Una tienda de streetwear llamada **Tribu Mala Store** con:
- Pagos via Stripe 
- Base de datos PostgreSQL (Neon)
- Autenticación de usuarios
- Gestión de órdenes con estados
- Panel de usuario para ver historial de compras

### **Estado actual:**
- ✅ **Stripe funcionando** (checkout, verify-session, webhooks básicos)
- ✅ **Frontend base** (Next.js + Tailwind + shadcn/ui)
- ✅ **Carrito funcional** con Context API
- ✅ **Variables de entorno** configuradas
- ❌ **Base de datos** - AÚN NO implementada
- ❌ **Autenticación** - AÚN NO implementada

---

## 📂 **ARCHIVOS CLAVE A REVISAR**

### **1. PRIMERO LEE ESTOS:**
- `md/mvp.md` - **ROADMAP PRIORIZADO** (lee esto SIEMPRE)
- `md/checklist.md` - Estado actual y progreso
- `.env.local` - Variables de entorno configuradas

### **2. CÓDIGO PRINCIPAL:**
- `app/api/create-checkout/route.ts` - Creación de sesiones Stripe
- `app/api/webhook/route.ts` - Manejo de webhooks (NECESITA MEJORAS)
- `app/api/verify-session/route.ts` - Verificación post-pago
- `context/cart-context.tsx` - Estado del carrito
- `app/config.ts` - Configuración de productos

### **3. PÁGINAS IMPORTANTES:**
- `app/page.tsx` - Página principal
- `app/checkout/page.tsx` - Página de checkout
- `app/checkout/success/page.tsx` - Página de éxito

---

## 🔥 **PRIORIDADES INMEDIATAS**

### **SEMANA 1 - CORE FEATURES:**
1. **🎯 Webhook handler robusto** (CRÍTICO - EN PROGRESO)
2. **🎯 Setup Neon PostgreSQL + Prisma** (CRÍTICO)
3. **🎯 Schema DB: User, Product, Order, OrderItem** (CRÍTICO)
4. **🎯 Sistema de emails** con Resend (CRÍTICO)
5. **🎯 Manejo de pagos fallidos** (CRÍTICO)

### **¿Por dónde empezar HOY?**
1. **Mejorar webhook handler** - actualmente muy básico
2. **Setup base de datos Neon** - es fundamental para todo lo demás

---

## 🛠️ **STACK TECNOLÓGICO**

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Pagos:** Stripe (Checkout Sessions + Webhooks)
- **Base de datos:** PostgreSQL (Neon) + Prisma
- **Autenticación:** NextAuth.js (próximamente)
- **Emails:** Resend (próximamente)
- **Estado:** React Context API
- **Deploy:** Vercel (próximamente)

---

## 📋 **COMANDOS ÚTILES**

```bash
# Desarrollo
pnpm run dev

# Base de datos (cuando esté configurada)
npx prisma generate
npx prisma db push
npx prisma studio

# Linting
pnpm run lint
```

---

## 🔗 **RECURSOS IMPORTANTES**

- **Stripe Dashboard:** https://dashboard.stripe.com/
- **Neon Dashboard:** https://neon.tech/
- **MVP Roadmap:** Ver `md/mvp.md`
- **Progreso:** Ver `md/checklist.md`

---

## 💬 **CONTEXTO DE CONVERSACIONES**

### **Última sesión trabajamos en:**
- ✅ Configuración de variables de entorno
- ✅ Actualización de keys de Stripe
- ✅ Creación de documentación MVP
- ✅ Reestructuración de prioridades

### **Próximo paso acordado:**
**Implementar webhook handler robusto y setup de base de datos Neon**

---

## 🎯 **OBJETIVO MVP**

**El MVP estará completo cuando:**
1. Usuario puede registrarse/login ✅
2. Usuario puede comprar un producto ✅ (80% hecho)
3. Pago se procesa correctamente ✅
4. Usuario recibe email de confirmación ❌
5. Orden se guarda en base de datos ❌
6. Usuario puede ver historial de órdenes ❌
7. Admin puede gestionar órdenes ❌
8. Sistema maneja errores graciosamente ❌

---

## 🚨 **IMPORTANTE**

- **NO implementar descuentos, wishlist, reviews** - están FUERA del MVP
- **FOCUS en vender y manejar órdenes** primero
- **Base de datos es CRÍTICA** - sin ella no hay persistencia
- **Webhooks robustos** - actualmente muy básicos

---

## 🤝 **CÓMO TRABAJAMOS**

1. **Siempre revisa `mvp.md`** para prioridades
2. **Actualiza `checklist.md`** cuando completes tareas
3. **Usa TodoWrite** para trackear progreso en la sesión
4. **Focus en MVP** - no te distraigas con features secundarias

---

*Última actualización: Julio 2025*
*Estado: Semana 1 del MVP en progreso*