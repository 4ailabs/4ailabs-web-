# 4ailabs - Agencia de IA Especializada

<div align="center">
  <img width="1200" height="475" alt="4ailabs Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 🚀 Sobre el Proyecto

4ailabs es una agencia de IA especializada en desarrollo de agentes inteligentes, sistemas de IA médica, context engineering y soluciones empresariales personalizadas.

### ✨ Características Principales

- 🤖 **Agentes de IA Autónomos** - Desarrollo de agentes inteligentes personalizados
- 🏥 **IA Médica** - Soluciones para healthcare e investigación médica
- 🧠 **Context Engineering** - Optimización avanzada de modelos de IA
- 📊 **Calculadora ROI** - Herramienta interactiva para calcular retorno de inversión
- 🔍 **Búsqueda Global** - Sistema de búsqueda en toda la aplicación
- 🌙 **Modo Oscuro/Claro** - Interfaz adaptable con tema personalizable
- 📱 **Diseño Responsivo** - Optimizado para todos los dispositivos
- ⚡ **Animaciones Sutiles** - Experiencia de usuario fluida y profesional

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel

## 🚀 Despliegue en Vercel

### Configuración Automática

1. **Conecta tu repositorio** a Vercel
2. **Configura las variables de entorno**:
   - `GEMINI_API_KEY`: Tu clave de API de Google Gemini
3. **Vercel detectará automáticamente** la configuración de Vite

### Archivos de Configuración

- ✅ `vercel.json` - Configuración de Vercel
- ✅ `package.json` - Scripts de build optimizados
- ✅ `vite.config.ts` - Configuración de Vite para producción
- ✅ `public/` - Archivos estáticos (favicon, robots.txt, sitemap.xml)

## 🏃‍♂️ Ejecutar Localmente

**Prerrequisitos:** Node.js 18+

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp env.example .env.local
   # Editar .env.local y agregar tu GEMINI_API_KEY
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Build para producción:**
   ```bash
   npm run build
   ```

5. **Preview del build:**
   ```bash
   npm run preview
   ```

## 📁 Estructura del Proyecto

```
├── components/          # Componentes reutilizables
│   ├── Chat.tsx        # Chatbot integrado
│   ├── Header.tsx      # Navegación principal
│   ├── Footer.tsx      # Pie de página
│   └── GlobalSearch.tsx # Búsqueda global
├── pages/              # Páginas de la aplicación
│   ├── HomePage.tsx    # Página principal
│   ├── ROICalculatorPage.tsx # Calculadora ROI
│   └── ...
├── services/           # Servicios y APIs
├── contexts/           # Contextos de React
├── styles/             # Estilos CSS personalizados
└── public/             # Archivos estáticos
```

## 🔧 Configuración de Variables de Entorno

```env
# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Environment
NODE_ENV=production
```

## 📱 Características Responsivas

- **Móvil**: Optimizado para pantallas < 640px
- **Tablet**: Adaptado para 640px - 1024px
- **Desktop**: Diseño completo para > 1024px

## 🎨 Temas

- **Modo Claro**: Interfaz limpia y profesional
- **Modo Oscuro**: Diseño moderno con colores oscuros
- **Persistencia**: Preferencias guardadas en localStorage

## 📈 SEO y Performance

- ✅ **Sitemap XML** incluido
- ✅ **Robots.txt** configurado
- ✅ **Meta tags** optimizados
- ✅ **Lazy loading** de imágenes
- ✅ **Code splitting** automático
- ✅ **Compresión** de assets

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Website**: [4ailabs.com](https://4ailabs.com)
- **Email**: info@4ailabs.com
- **GitHub**: [@4ailabs](https://github.com/4ailabs)
