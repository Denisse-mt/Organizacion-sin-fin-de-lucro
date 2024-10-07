<?php
class Event {
    private $descripcion;
    private $tipo;
    private $lugar;
    private $fecha;
    private $hora;
    
    public function __construct($descripcion, $tipo, $lugar, $fecha, $hora) {
        $this->descripcion = $descripcion;
        $this->tipo = $tipo;
        $this->lugar = $lugar;
        $this->fecha = $fecha;
        $this->hora = $hora;
    }
    
    public function getDescripcion() {
        return $this->descripcion;
    }
    
    public function getTipo() {
        return $this->tipo;
    }
    
    public function getLugar() {
        return $this->lugar;
    }
    
    public function getFecha() {
        return $this->fecha;
    }
    
    public function getHora() {
        return $this->hora;
    }
    
    public static function filterEvents($events, $criteria) {
        return array_filter($events, function($event) use ($criteria) {
            return strpos(strtolower($event->getDescripcion()), strtolower($criteria)) !== false;
        });
    }
}
?>
