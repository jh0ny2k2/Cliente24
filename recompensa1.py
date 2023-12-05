import math

def reward_function(params):
    # Parámetros de entrada
    track_width = params['track_width']
    distance_from_center = params['distance_from_center']
    all_wheels_on_track = params['all_wheels_on_track']
    speed = params['speed']
    steering_angle = abs(params['steering_angle']) # Se toma el valor absoluto del ángulo de dirección
    progress = params['progress']
    steps = params['steps']

    # Parámetros de penalización y recompensa
    off_track_penalty = -1e3
    center_reward = 0.2
    progress_reward = 1

    # Penalizar si el coche se sale del circuito
    if not all_wheels_on_track:
        return off_track_penalty
    
    # Penalizar cambios bruscos en el ángulo de dirección
    steering_reward = 1.0 - (steering_angle / 30.0)
    
    # Recompensar por mantenerse cerca de la línea central
    reward = center_reward * (1.0 - (distance_from_center / (0.5 * track_width)))
    
   # {0 < x < 1} Recompensa por una buena velocidad 
    if speed > 1:
        speed_reward = speed * 2
    else:
        speed_reward = -1e3
    
    # Recompensar por el progreso en la pista
    reward += progress_reward * progress / steps
    
    # Ajustar la recompensa según el ángulo de dirección
    reward *= steering_reward
    
     # Si la velocidad es buena
    reward *= math.exp(2 * speed)
    
    return float(reward)