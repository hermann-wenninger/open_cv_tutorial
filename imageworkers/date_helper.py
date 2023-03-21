import time
def log_date_time(message = "now no message"):
    """Return the current time formatted for logging."""
    monthname = [None,
                 'Jan', 'Feb', 'März', 'April', 'May', 'Juni',
                 'Juli', 'August', 'September', 'October', 'November', 'December']
    day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    now = time.time()
    year, month, day, hh, mm, ss, x, y, z = time.localtime(now)
    
    s = f"{day} {monthname[month]} {year} {hh} Uhr {mm} Minuten {ss} Sekunden {x} zehntel {y} hundertstel  {z} tausendstel"
    return s + " " + message
print(log_date_time())
    

    