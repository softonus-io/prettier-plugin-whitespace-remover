# 🚀 Prettier Plugin: Whitespace Remover

A powerful Prettier plugin designed to remove unnecessary whitespaces from class attributes (`class` and `className`) across **Vue.js**, **Angular**, **React**, **Next**, **Nuxt** and **HTML** projects.

This plugin ensures that class names are clean and consistently formatted by trimming excess spaces and standardizing them, improving the overall code quality.

---

## 🗂 Installation

Install the plugin for your project using one of the following package managers:

**Bun:**

```bash
bun add -D @softonus/prettier-plugin-whitespace-remover
```

**Yarn:**

```bash
yarn add -D @softonus/prettier-plugin-whitespace-remover
```

**npm:**

```bash
npm install --save-dev @softonus/prettier-plugin-whitespace-remover
```

---

## 🔨 Usage

1. **Create a `.prettierrc` file** (if you don’t already have one) in your project’s root directory.

2. **Add the plugin to your Prettier configuration**:

```json
{
  "plugins": ["@softonus/prettier-plugin-whitespace-remover"]
}
```

This will automatically apply the plugin to clean up whitespace in your **React**, **Vue.js**, **Angular**, **Next**, **Nuxt** and **HTML** projects.

---

## 🌐 Supported Frameworks

- **React** & **Next.js**: Cleans up `className` attributes.
- **Vue.js**: Cleans up `class` attributes within `.vue` files.
- **Angular**: Cleans up `class` attributes in HTML and Angular templates.
- **Plain HTML**: Cleans up `class` attributes in regular HTML files.

---

## ⚡ Features

- **Cleans up class names**: Removes unnecessary spaces and trims multiple spaces into a single space.
- **Works across all major frameworks**: Supports React, Vue, Angular, Next.js, and plain HTML.
- **Zero configuration**: Simply add the plugin and start formatting.

---

## 📝 Example

### Before Prettier:

```html
<div class="    btn  btn-primary  ">
  Hello World
</div>
```

### After Prettier:

```html
<div class="btn btn-primary">
  Hello World
</div>
```

---

## 📨 Contact

For inquiries or suggestions, reach out to me at [ebo@softonus.com](mailto:ebo@softonus.com).

---

## 🤝 Contributions

Contributions are welcome! If you have any improvements or fixes, feel free to open an issue or create a pull request.

---

## 🏷️ License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
