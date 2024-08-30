# Use a imagem base do Python
FROM python:3.9-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências para o contêiner
COPY requirements.txt .

# Instale as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Defina o comando para iniciar o servidor
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "maintenance.wsgi:maintenanceApp"]
